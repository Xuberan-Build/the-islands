# Google Ads

## Accounts

| Account | Customer ID | Purpose | Added |
|---|---|---|---|
| Google Search Ads | **945-281-8799** (`9452818799` in the API) | Paid search for The Islands | 2026-11-25 |
| Manager (MCC) | **891-412-2258** (`8914122258`) | Holds the API developer token; links to the account above | 2026-11-25 |
| Google Cloud project | `islands-ads-api` (#540832219680) | OAuth client + Google Ads API enabled | 2026-11-25 |

Related tracking already on the site: GA4 `G-9SCM660KF3` (`public/index.html`), Meta Pixel, and
call/booking/email events in `src/lib/analytics.js`.

## API access setup

The API needs four things: a **developer token** (comes only from a manager account), an **OAuth
client** (Google Cloud), a **refresh token** (from you signing in once), and the **manager ID** as
`login_customer_id`.

### 1. Manager account + developer token (Google Ads UI)
1. Create a manager account at <https://ads.google.com/home/tools/manager-accounts/> using the same
   Google login. It's free and has no spend.
2. In the manager account: **Accounts → Link existing account →** `945-281-8799`. Accept the invite
   from inside 945-281-8799 (**Admin → Access and security → Managers**).
3. In the manager account: **Admin → API Center**. Fill out the form to get a developer token.
   New tokens start at **Explorer access**, which works on real accounts at low daily operation limits.
   That covers one account. Apply for **Basic access** in API Center if you hit the limits.

### 2. Google Cloud OAuth client
1. <https://console.cloud.google.com/> → create a project (e.g. `islands-ads`).
2. **APIs & Services → Library →** enable **Google Ads API**.
3. **OAuth consent screen**: set it to External, add your email as a test user, then click
   **Publish app** to put it **In production**. In "Testing" status, refresh tokens expire after
   7 days. You can ignore the "unverified app" warning because you're the only user.
4. **Credentials → Create credentials → OAuth client ID → Desktop app**. Download the JSON as
   `ads/client_secret.json`. It's gitignored.

### 3. Install + get the refresh token
```sh
python3 -m venv ads/.venv
ads/.venv/bin/pip install -r ads/requirements.txt
cp ads/google-ads.example.yaml ads/google-ads.yaml   # add developer_token + login_customer_id
ads/.venv/bin/python ads/scripts/get_refresh_token.py ads/client_secret.json
```
The script opens a browser and writes `client_id`, `client_secret`, and `refresh_token` into
`ads/google-ads.yaml` (mode 600).

### 4. Verify
```sh
ads/.venv/bin/python ads/scripts/check_access.py
```
This is read-only. It lists the accounts you can reach, the account details, and the campaigns.

## Secrets
`ads/google-ads.yaml`, `ads/client_secret*.json`, and `ads/.venv` are gitignored. Don't paste the
developer token or refresh token into chat, commits, or Netlify env vars. This tooling runs
locally only.
