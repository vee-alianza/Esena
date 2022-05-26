"""revised tables

Revision ID: cd03dfd4429e
Revises: 50dd56fb7c10
Create Date: 2022-05-25 17:02:28.849532

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'cd03dfd4429e'
down_revision = '50dd56fb7c10'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('teams_project_id_fkey', 'teams', type_='foreignkey')
    op.create_foreign_key(None, 'teams', 'projects', ['project_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'teams', type_='foreignkey')
    op.create_foreign_key('teams_project_id_fkey', 'teams', 'users', ['project_id'], ['id'])
    # ### end Alembic commands ###