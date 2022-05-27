import requests
from datetime import datetime

# # url = "http://127.0.0.1:5000/api/users/4/projects"
# url = "http://127.0.0.1:5000/api/projects/4"
# payload={'name': 'esena project',
#     'description': 'Sqlalchemy is a must',
#     'start_date': '2022-3-1',
#     'end_date': '2022-4-1',
#     'is_public': "",
#     'priority_id': 2,
#     'status_id': 3,
# }

# headers = {
#   'csrf_token': 'ImUyYTk5ZGFiZGI0M2RhNTdlZDZiZDMzNjVkNGM1NWVlMTQ1NTkzOGMi.YpBaaQ.iv2Pc7GgVA-dUpMwVRgHda6gLYA',
#   'session': 'eyJjc3JmX3Rva2VuIjoiZTJhOTlkYWJkYjQzZGE1N2VkNmJkMzM2NWQ0YzU1ZWUxNDU1OTM4YyJ9.YpBaaQ.BpSS6YphsQ-UQZANHJ2l00oK3TQ',
#   'Cookie': 'session=.eJwljjtuAzEMRO-i2oXEnyRfZkGKJBIYSIBduzJ89whINzPFm_cuR55xfZX783zFrRzfXu4FhkonUzCGnYSX9EqdUAEb2gDzuZxjJUXowC5QNUOiLRAeQ6aRUu_hONMHA3iYTonwTES2ya4mNiRAiJvaXGnkVCuSZC1b5HXF-W_Tdl3Xmcfz9xE_ewjQOTfAjdCV942YIwo7LeaIRswTxyqfPzRLQH4.YpBajg.mp1qTPgMLlXaOju098J4MWJPOtQ; csrf_token=ImUyYTk5ZGFiZGI0M2RhNTdlZDZiZDMzNjVkNGM1NWVlMTQ1NTkzOGMi.YpD0ng.HNFXMcR4CP72qZgfl0YGiulPs5o'
# }

# response = requests.request("PUT", url, headers=headers, data=payload)

# print(response.text)

url = "http://127.0.0.1:5000/api/comments/3"

payload={
    'content': 'Test editing comment',
}

headers = {
  'csrf_token': 'IjViNjE5OTYyOGY3NDBiYTNjMWUxNjdkNzZmM2EzNDhmY2FlMTJmYzki.YpEGvQ.xl_1fLVf33XFtu9NOWVPEFPBRnQ',
  'session': 'eyJjc3JmX3Rva2VuIjoiNWI2MTk5NjI4Zjc0MGJhM2MxZTE2N2Q3NmYzYTM0OGZjYWUxMmZjOSJ9.YpEGvQ.DUkMzAbxDZmobNtKaU91d4ZUpeY',
  'Cookie': 'csrf_token=IjViNjE5OTYyOGY3NDBiYTNjMWUxNjdkNzZmM2EzNDhmY2FlMTJmYzki.YpEMuw.rQYtDoQiXPTFkZUDTI0NtxrbAQs; session=.eJydjktuwzAMRK8iaB0UFvWh5FNkXwQGRZNxUDcuLGcV5O5V0Bt0QRAzQ2Le0066Uluk2fHzac3Rl_2W1ugq9mTPq1ATs25Xc7ubYzPE3ENzLLdmfvrNh728Tv_8u5x6-S5tseOxP6Sr22xHq95hwhlDzAA1aaSMqWAMJXuPvih7jQ6BYqKgQWiO5JXyoFogVEZRUIa5IkBADmHwlRV7TEABPScYSmaeK1PIQylFVROQf88coeNPjyb7H43rktuu07F9yb0bsSZXSoKsGIZKnp24N25STz5kZRLX-4t9_QJB9WkR.YpEJ5A.wfXMYbQvzgfjOHLi72W6fcAatt4'
}
response = requests.request("PUT", url, headers=headers, data=payload)
print(response.text)
