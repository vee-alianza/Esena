"""revised tables

Revision ID: 50dd56fb7c10
Revises: ec359d4ed902
Create Date: 2022-05-25 17:00:33.126401

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '50dd56fb7c10'
down_revision = 'ec359d4ed902'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('teams_project_id_fkey', 'teams', type_='foreignkey')
    op.create_foreign_key(None, 'teams', 'users', ['project_id'], ['id'])
    op.drop_column('teams', 'id')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('teams', sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False))
    op.drop_constraint(None, 'teams', type_='foreignkey')
    op.create_foreign_key('teams_project_id_fkey', 'teams', 'projects', ['project_id'], ['id'])
    # ### end Alembic commands ###
