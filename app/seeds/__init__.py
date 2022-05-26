from flask.cli import AppGroup
from .users import seed_users, undo_users
from .statuses import seed_statuses, undo_statuses
from .priorities import seed_priorities, undo_priorities
from .projects import seed_projects, undo_projects
from .tasks import seed_tasks, undo_tasks
from .comments import seed_comments, undo_comments

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_statuses()
    seed_priorities()
    seed_projects()
    seed_tasks()
    seed_comments()
    
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_statuses()
    undo_priorities()
    undo_projects()
    undo_tasks()
    undo_comments()
    # Add other undo functions here
