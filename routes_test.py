import requests
from datetime import datetime

# url = "http://127.0.0.1:5000/api/users/4/projects"
url = "http://127.0.0.1:5000/api/projects/3"
payload={'name': 'express project',
    'description': 'Sequelize is a must',
    'start_date': '2022-1-1',
    'end_date': '2022-1-1',
    'is_public': True,
    'priority_id': 1,
    'status_id': 1,
}

headers = {
  'csrf_token': 'ImUyYTk5ZGFiZGI0M2RhNTdlZDZiZDMzNjVkNGM1NWVlMTQ1NTkzOGMi.YpBaaQ.iv2Pc7GgVA-dUpMwVRgHda6gLYA',
  'session': 'eyJjc3JmX3Rva2VuIjoiZTJhOTlkYWJkYjQzZGE1N2VkNmJkMzM2NWQ0YzU1ZWUxNDU1OTM4YyJ9.YpBaaQ.BpSS6YphsQ-UQZANHJ2l00oK3TQ',
  'Cookie': 'session=.eJwljjtuAzEMRO-i2oXEnyRfZkGKJBIYSIBduzJ89whINzPFm_cuR55xfZX783zFrRzfXu4FhkonUzCGnYSX9EqdUAEb2gDzuZxjJUXowC5QNUOiLRAeQ6aRUu_hONMHA3iYTonwTES2ya4mNiRAiJvaXGnkVCuSZC1b5HXF-W_Tdl3Xmcfz9xE_ewjQOTfAjdCV942YIwo7LeaIRswTxyqfPzRLQH4.YpBajg.mp1qTPgMLlXaOju098J4MWJPOtQ; csrf_token=ImUyYTk5ZGFiZGI0M2RhNTdlZDZiZDMzNjVkNGM1NWVlMTQ1NTkzOGMi.YpBm3Q.eZdMUh8DZPIu7lXG4IzFwer5D2Y'
}

response = requests.request("PUT", url, headers=headers, data=payload)

print(response.text)