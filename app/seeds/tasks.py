from app.models import db, Task
from datetime import datetime


def seed_tasks():
    email_task1 = Task(name="Add first name and last name to subject", description="",
                 end_date=datetime(2022, 6, 6), status_id=3, priority_id=1, assigner_id=2, assignee_id=1, project_id=1, is_completed=True)
    email_task2 = Task(name="Redo reminder card", description="",
                 end_date=datetime(2022, 6, 8), status_id=3, priority_id=1, assigner_id=3, assignee_id=1, project_id=1, is_completed=True)
    email_task3 = Task(name="Hide Configuration menu + get defaults", description="Defaults for email feature",
                 end_date=datetime(2022, 6, 10), status_id=2, priority_id=3, assigner_id=4, assignee_id=2, project_id=1, is_completed=False)
    email_task4 = Task(name="Revise the account setting page", description="Users can choose receiving email notifications or not",
                 end_date=datetime(2022, 6, 18), status_id=1, priority_id=2, assigner_id=4, assignee_id=1, project_id=1, is_completed=False)
    email_task5 = Task(name="Make sure SC works for all features", description="",
                 end_date=datetime(2022, 6, 18), status_id=1, priority_id=1, assigner_id=3, assignee_id=3, project_id=1, is_completed=False)
    email_task6 = Task(name="Clicking on a reminder card should activate reminder tab", description="",
                 end_date=datetime(2022, 6, 16), status_id=2, priority_id=1, assigner_id=1, assignee_id=1, project_id=1, is_completed=False)
    email_task7 = Task(name="CSS issues on notification page", description="",
                 end_date=datetime(2022, 6, 17), status_id=1, priority_id=2, assigner_id=1, assignee_id=4, project_id=1, is_completed=False)
    email_task8 = Task(name="Remove priority status from overview page", description="",
                 end_date=datetime(2022, 6, 16), status_id=3, priority_id=2, assigner_id=1, assignee_id=3, project_id=1, is_completed=False)
    email_task9 = Task(name="Inter IDS in stream subscription", description="",
                 end_date=datetime(2022, 6, 20), status_id=3, priority_id=3, assigner_id=2, assignee_id=1, project_id=1, is_completed=False)
    
    nescord_task1 = Task(name="Enable post rendering logging for STL labels", description="", end_date=datetime(2022, 6, 23), assigner_id=5, status_id=2, priority_id=2, assignee_id=1, project_id=2, is_completed=True)
    nescord_task2 = Task(name="Enable diagnostics for UIKit", description="", end_date=datetime(2022, 6, 25), assigner_id=1, status_id=1, priority_id=2, assignee_id=4, project_id=2, is_completed=True)
    nescord_task3 = Task(name="User specified schedule in SLI scheduling", description="", end_date=datetime(2022, 6, 20), assigner_id=1, status_id=3, priority_id=3, assignee_id=5, project_id=2, is_completed=False)
    nescord_task4 = Task(name="Add option to only show key plots", description="", end_date=datetime(2022, 6, 21), assigner_id=5, status_id=2, priority_id=3, assignee_id=1, project_id=2, is_completed=False)
    nescord_task5 = Task(name="Reset the SPWT SN state on the downlink when server not responding", description="", end_date=datetime(2022, 6, 27), assigner_id=4, status_id=1, priority_id=1, assignee_id=1, project_id=2, is_completed=False)
    nescord_task6 = Task(name="Add filed stats for user explicit video pause time in video calls", description="", end_date=datetime(2022, 6, 30), assigner_id=1, status_id=1, priority_id=3, assignee_id=5, project_id=2, is_completed=False)
    nescord_task7 = Task(name="Detect change of replay list upon group update", description="", end_date=datetime(2022, 7, 1), assigner_id=6, status_id=2, priority_id=2, assignee_id=7, project_id=2, is_completed=False)
    nescord_task8 = Task(name="Migrate restart based on network condition check", description="", end_date=datetime(2022, 7, 1), assigner_id=4, status_id=1, priority_id=1, assignee_id=5, project_id=2, is_completed=False)
    nescord_task9 = Task(name="Improve stateful ping usage in client transport", description="", end_date=datetime(2022, 7, 2), assigner_id=7, status_id=3, priority_id=2, assignee_id=1, project_id=2, is_completed=False)
    nescord_task10 = Task(name="Resets in video call", description="Video image rendering is resetting during video meetings", end_date=datetime(2022, 7, 5), assigner_id=5, status_id=1, priority_id=3, assignee_id=1, project_id=2, is_completed=False)
    
    walk_task1 = Task(name="Split store test into multiple targets", description="", end_date=datetime(2022,7,10), status_id=3, priority_id=1, assigner_id=8, assignee_id=2, project_id=3, is_completed=True)
    walk_task2 = Task(name="Track maximum distance from slide window", description="", end_date=datetime(2022,7,13), status_id=2, priority_id=1, assigner_id=1, assignee_id=5, project_id=3, is_completed=True)
    walk_task3 = Task(name="Update client wiki page", description="", end_date=datetime(2022,7,12), status_id=1, priority_id=1, assigner_id=2, assignee_id=8, project_id=3, is_completed=False)
    walk_task4 = Task(name="Improve code structure sheet", description="", end_date=datetime(2022,7,16), status_id=2, priority_id=1, assigner_id=1, assignee_id=1, project_id=3, is_completed=False)
    walk_task5 = Task(name="Add GSO related info on client", description="", end_date=datetime(2022,7,15), status_id=1, priority_id=2, assigner_id=5, assignee_id=1, project_id=3, is_completed=False)
    walk_task6 = Task(name="Enable strict nullability for UXG", description="", end_date=datetime(2022,7,18), status_id=3, priority_id=2, assigner_id=2, assignee_id=8, project_id=3, is_completed=False)
    walk_task7 = Task(name="Verify performance of music player", description="", end_date=datetime(2022,7,19), status_id=2, priority_id=2, assigner_id=5, assignee_id=1, project_id=3, is_completed=False)
    walk_task8 = Task(name="Bring back help section", description="", end_date=datetime(2022,7,21), status_id=1, priority_id=3, assigner_id=8, assignee_id=1, project_id=3, is_completed=False)
    walk_task9 = Task(name="Remove translation status", description="", end_date=datetime(2022,7,22), status_id=3, priority_id=3, assigner_id=1, assignee_id=2, project_id=3, is_completed=False)
    walk_task10 = Task(name="Adjust CSS on profile page", description="", end_date=datetime(2022,7,24), status_id=1, priority_id=1, assigner_id=1, assignee_id=5, project_id=3, is_completed=False)


    cupid_task1 = Task(name="Use imgix API to optimize the image", description="", end_date=datetime(2022,8,3), status_id=2, priority_id=2, assigner_id=1, assignee_id=3, project_id=4, is_completed=True)
    cupid_task2 = Task(name="Add Payfast Payment Gateway", description="", end_date=datetime(2022,8,5), status_id=1, priority_id=2, assigner_id=6, assignee_id=4, project_id=4, is_completed=True)
    cupid_task3 = Task(name="User Status Circle", description="", end_date=datetime(2022,8,8), status_id=3, priority_id=1, assigner_id=8, assignee_id=6, project_id=4, is_completed=False)
    cupid_task4 = Task(name="Improve private live chat", description="", end_date=datetime(2022,8,10), status_id=2, priority_id=3, assigner_id=1, assignee_id=8, project_id=4, is_completed=False)
    cupid_task5 = Task(name="Create an invoice section in the User's account", description="", end_date=datetime(2022,8,9), status_id=1, priority_id=2, assigner_id=3, assignee_id=1, project_id=4, is_completed=False)
    cupid_task6 = Task(name="Move badages to different sections", description="", end_date=datetime(2022,8,14), status_id=2, priority_id=1, assigner_id=4, assignee_id=1, project_id=4, is_completed=False)
    cupid_task7 = Task(name="Improve file readability", description="", end_date=datetime(2022,8,18), status_id=2, priority_id=2, assigner_id=6, assignee_id=3, project_id=4, is_completed=False)
    cupid_task8 = Task(name="Improve way of logging error msg", description="", end_date=datetime(2022,8,23), status_id=3, priority_id=1, assigner_id=1, assignee_id=4, project_id=4, is_completed=False)
    cupid_task9 = Task(name="Cleanup kernel constant and ban class", description="", end_date=datetime(2022,8,30), status_id=2, priority_id=1, assigner_id=8, assignee_id=1, project_id=4, is_completed=False)
    cupid_task10 = Task(name="Access Admin Panel Upon Installation ", description="", end_date=datetime(2022,9,2), status_id=1, priority_id=3, assigner_id=1, assignee_id=6, project_id=4, is_completed=False)

    performance_task1= Task(name="Pinpoint inefficiences", description="Figure out where performance starts to dip, performance tests to find ineffiencies", end_date=datetime(2022,7,13), status_id=2, priority_id=2, assigner_id=8, assignee_id=1, project_id=5, is_completed=False)
    performance_task2= Task(name="Configure load balancers", description="Configure load balancers to maintain server performances", end_date=datetime(2022,7,14), status_id=1, priority_id=1, assigner_id=8, assignee_id=6, project_id=5, is_completed=False)

    ux_task1= Task(name="Get customer feedback", description='Perform customer surveys and collect data on user experience', end_date=datetime(2022,8,14), status_id=2,priority_id=2, assigner_id=4, assignee_id=1, project_id=6, is_completed=False)
    ux_task2= Task(name="Meet with UX team", description='Discuss UX improvements and what functionalities can be implemented effectively', end_date=datetime(2022,8,16), status_id=1,priority_id=1, assigner_id=4, assignee_id=8, project_id=6, is_completed=False)

    db.session.add(email_task1)
    db.session.add(email_task2)
    db.session.add(email_task3)
    db.session.add(email_task4)
    db.session.add(email_task5)
    db.session.add(email_task6)
    db.session.add(email_task7)
    db.session.add(email_task8)
    db.session.add(email_task9)
   
    db.session.add(nescord_task1)
    db.session.add(nescord_task2)
    db.session.add(nescord_task3)
    db.session.add(nescord_task4)
    db.session.add(nescord_task5)
    db.session.add(nescord_task6)
    db.session.add(nescord_task7)
    db.session.add(nescord_task8)
    db.session.add(nescord_task9)
    db.session.add(nescord_task10)
    
    db.session.add(walk_task1)
    db.session.add(walk_task2)
    db.session.add(walk_task3)
    db.session.add(walk_task4)
    db.session.add(walk_task5)
    db.session.add(walk_task6)
    db.session.add(walk_task7)
    db.session.add(walk_task8)
    db.session.add(walk_task9)
    db.session.add(walk_task10)

    db.session.add(cupid_task1)
    db.session.add(cupid_task2)
    db.session.add(cupid_task3)
    db.session.add(cupid_task4)
    db.session.add(cupid_task5)
    db.session.add(cupid_task6)
    db.session.add(cupid_task7)
    db.session.add(cupid_task8)
    db.session.add(cupid_task9)
    db.session.add(cupid_task10)
    
    db.session.add(performance_task1)
    db.session.add(performance_task2)
    db.session.add(ux_task1)
    db.session.add(ux_task2)

    db.session.commit()

def undo_tasks():
    db.session.execute('TRUNCATE tasks RESTART IDENTITY CASCADE;')
    db.session.commit()
