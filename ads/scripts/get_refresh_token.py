"""One-time OAuth flow: opens a browser, you sign in with the Google account that
has access to the Ads account, and the refresh token is written straight into
ads/google-ads.yaml (so it never has to be copy-pasted anywhere).

Usage (from repo root):
    ads/.venv/bin/python ads/scripts/get_refresh_token.py   # defaults to ads/client_secret.json
"""
import sys
from pathlib import Path

import yaml
from google_auth_oauthlib.flow import InstalledAppFlow

SCOPES = ["https://www.googleapis.com/auth/adwords"]
CONFIG = Path(__file__).resolve().parent.parent / "google-ads.yaml"


def main():
    secret = sys.argv[1] if len(sys.argv) > 1 else CONFIG.parent / "client_secret.json"
    flow = InstalledAppFlow.from_client_secrets_file(str(secret), scopes=SCOPES)
    # prompt=consent forces Google to return a refresh token even on re-auth.
    creds = flow.run_local_server(port=8080, prompt="consent", access_type="offline")

    if not creds.refresh_token:
        sys.exit("No refresh token returned. Remove the app at "
                 "myaccount.google.com/permissions and run again.")

    config = yaml.safe_load(CONFIG.read_text()) if CONFIG.exists() else {}
    config.update(
        client_id=flow.client_config["client_id"],
        client_secret=flow.client_config["client_secret"],
        refresh_token=creds.refresh_token,
    )
    config.setdefault("use_proto_plus", True)
    CONFIG.write_text(yaml.safe_dump(config, sort_keys=False))
    CONFIG.chmod(0o600)
    print(f"Refresh token saved to {CONFIG}")


if __name__ == "__main__":
    main()
