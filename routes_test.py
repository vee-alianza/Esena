import requests
from datetime import datetime

# url = "http://127.0.0.1:5000/api/users/4/projects"
# url = "http://127.0.0.1:5000/api/projects/5"
# url = "http://127.0.0.1:5000/api/projects/2/tasks"
url = "http://127.0.0.1:5000/api/tasks/3"
# payload={'name': 'esena project',
#     'description': 'Sqlalchemy is a must',
#     'start_date': '2022-3-1',
#     'end_date': '2022-4-1',
#     'is_public': "",
#     'priority_id': 2,
#     'status_id': 3,
# }
payload={'name': 'design doc',
    'description': 'Docs, wireframes',
    'end_date': '2022-3-1',
    'priority_id': 2,
    'status_id': 3,
    'assignee_id': 2
}

headers = {
  'csrf_token': 'ImUyYTk5ZGFiZGI0M2RhNTdlZDZiZDMzNjVkNGM1NWVlMTQ1NTkzOGMi.YpBaaQ.iv2Pc7GgVA-dUpMwVRgHda6gLYA',
  'session': 'eyJjc3JmX3Rva2VuIjoiZTJhOTlkYWJkYjQzZGE1N2VkNmJkMzM2NWQ0YzU1ZWUxNDU1OTM4YyJ9.YpBaaQ.BpSS6YphsQ-UQZANHJ2l00oK3TQ',
  'Cookie': 'session=.eJwljjtuAzEMRO-i2oXEnyRfZkGKJBIYSIBduzJ89whINzPFm_cuR55xfZX783zFrRzfXu4FhkonUzCGnYSX9EqdUAEb2gDzuZxjJUXowC5QNUOiLRAeQ6aRUu_hONMHA3iYTonwTES2ya4mNiRAiJvaXGnkVCuSZC1b5HXF-W_Tdl3Xmcfz9xE_ewjQOTfAjdCV942YIwo7LeaIRswTxyqfPzRLQH4.YpBajg.mp1qTPgMLlXaOju098J4MWJPOtQ; csrf_token=ImUyYTk5ZGFiZGI0M2RhNTdlZDZiZDMzNjVkNGM1NWVlMTQ1NTkzOGMi.YpEEjA.YjJuv8OpfdnhJrjB9mOcxY5nqB8'
}

response = requests.request("DELETE", url, headers=headers, data=payload)

print(response.text)