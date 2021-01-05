from app import app
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine,Column,Integer,String

db = SQLAlchemy(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///word-book.db?check_same_thread=False'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

class Wordbook(db.Model):
    # 设置Wordbook表参数
    __tablename__ = 'wordbook'
    word = Column(db.String(32))
    word_userid = Column(db.String(64),nullable=False)
    word_index = Column(db.Integer,primary_key=True,autoincrement=True)
    definition = Column(String(128))

    def __repr__(self):
        return "<wordbook(word_index='%s',word='%s',definition='%s',word_userid='%s')>" % (
            self.word_index,self.word, self.definition ,self.word_userid
        )


db.create_all()