"""Smoke test for Google Ads API access. Read-only.

Prints the accounts the OAuth user can reach, then basic info and campaigns for
the Islands search account.

Usage (from repo root):
    ads/.venv/bin/python ads/scripts/check_access.py
"""
from pathlib import Path

from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException

CUSTOMER_ID = "9452818799"  # 945-281-8799, Google Search Ads account
CONFIG = Path(__file__).resolve().parent.parent / "google-ads.yaml"


def main():
    client = GoogleAdsClient.load_from_storage(str(CONFIG))

    accessible = client.get_service("CustomerService").list_accessible_customers()
    print("Accessible accounts:")
    for name in accessible.resource_names:
        print("  ", name)

    ga = client.get_service("GoogleAdsService")
    info = ga.search(customer_id=CUSTOMER_ID, query="""
        SELECT customer.id, customer.descriptive_name, customer.currency_code,
               customer.time_zone, customer.manager, customer.test_account
        FROM customer""")
    for row in info:
        c = row.customer
        print(f"\nAccount {c.id}: {c.descriptive_name} | {c.currency_code} | "
              f"{c.time_zone} | manager={c.manager} test={c.test_account}")

    campaigns = ga.search(customer_id=CUSTOMER_ID, query="""
        SELECT campaign.id, campaign.name, campaign.status,
               campaign.advertising_channel_type, campaign_budget.amount_micros
        FROM campaign ORDER BY campaign.name""")
    print("\nCampaigns:")
    found = False
    for row in campaigns:
        found = True
        budget = row.campaign_budget.amount_micros / 1_000_000
        print(f"  {row.campaign.id}  {row.campaign.name}  "
              f"{row.campaign.status.name}  {row.campaign.advertising_channel_type.name}  "
              f"${budget:.2f}/day")
    if not found:
        print("  (none yet)")


if __name__ == "__main__":
    try:
        main()
    except GoogleAdsException as ex:
        for err in ex.failure.errors:
            print(f"API error: {err.error_code} {err.message}")
        print(f"request_id: {ex.request_id}")
        raise SystemExit(1)
