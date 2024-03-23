from pyairtable import Api
import pandas as pd
import numpy as np
import os
import requests
import urllib.parse
import mimetypes
# from dotenv import load_dotenv
# load_dotenv()

AIRTABLE_API_KEY = os.environ.get("AIRTABLE_API_KEY")
AIRTABLE_BASE_ID = os.environ.get("AIRTABLE_BASE_ID")
print(AIRTABLE_API_KEY, AIRTABLE_BASE_ID)

api = Api(api_key=AIRTABLE_API_KEY)
table = api.table(AIRTABLE_BASE_ID, table_name='Pages')
print(table)
data = table.all()
df = pd.DataFrame([c['fields'] for c in data])
for index, row in df.iterrows():
    attachments = row['Attachments']
    if isinstance(attachments, list):
        for attachment in attachments:
            url = urllib.parse.unquote(attachment['url'])
            mime_type =mimetypes.guess_extension(attachment['type'])
            filename = attachment['id'] + mime_type
            file_path = os.path.join('public/', filename)

            # Download the file
            response = requests.get(url)

            # Write the file to disk
            with open(file_path, 'wb') as f:
                f.write(response.content)

            print(f"Downloaded {filename} to {file_path}")

df.replace(to_replace=np.NaN,value="").to_json('public/ishan-site_pages.json',orient='records',indent=2)

table = api.table(AIRTABLE_BASE_ID, table_name='Projects')
print(table)
data = table.all()
df = pd.DataFrame([c['fields'] for c in data])
for index, row in df.iterrows():
    attachments = row['Attachments']
    if isinstance(attachments, list):
        for attachment in attachments:
            url = urllib.parse.unquote(attachment['url'])
            mime_type =mimetypes.guess_extension(attachment['type'])
            filename = attachment['id']  + mime_type
            file_path = os.path.join('public/', filename)

            # Download the file
            response = requests.get(url)

            # Write the file to disk
            with open(file_path, 'wb') as f:
                f.write(response.content)

            print(f"Downloaded {filename} to {file_path}")

df.replace(to_replace=np.NaN,value="").to_json('public/ishan-site_projects.json',orient='records',indent=2)
