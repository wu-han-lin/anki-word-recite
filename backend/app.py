#!/usr/bin/env python
from flask import Flask,g,request,make_response,jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine,Column,Integer,String
from sqlalchemy.ext.declarative import  declarative_base
from sqlalchemy.orm import sessionmaker
import requests

app = Flask(__name__)

from model import Wordbook,db
@app.before_request
def db_link():
    # print(Wordbook.query.all())
    return

@app.route('/hello')
def hello():
    return 'hello'

@app.route('/addword',methods=['POST','GET'])
def addword():
    word = request.args.get('word')
    user_id = request.args.get('user_id')
    response = make_response()
    if (db.session.query(Wordbook).filter_by(word_userid=user_id,word=word).first()==None):
        wordToAdd = Wordbook(word=word,word_userid=user_id)
        db.session.add(wordToAdd)
        return '已经添加单词'+wordToAdd.word+'用户id为'+wordToAdd.word_userid
    else:
        response = make_response()
        return '该单词已经存在！'




@app.route('/delword',methods=['POST','GET'])
def delword():
    word = request.args.get('word')
    user_id = request.args.get('user_id')
    allWord = []
    wordToDel = db.session.query(Wordbook).filter_by(word_userid=user_id,word=word).first()
    if (wordToDel != None):
        db.session.delete(wordToDel)
        return '成功删除！'
    else:
        return '该词不存在！'

@app.route('/login',methods=['POST','GET'])
def login():
    # 小程序Id
    code = request.args.get('code')
    # print(code)
    appId = 'wx074ae7a29c18a937'
    appSecret = '0ceb7e5b3a55b2e06e315892c7e36b78'
    userInfoRequest = requests.get(
        'https://api.weixin.qq.com/sns/jscode2session?appid='+appId+'&secret='+appSecret+'&js_code='+code+'&grant_type=authorization_code')
    key_id = userInfoRequest.text
    print(key_id)
    response = make_response(key_id)
    return response

@app.route('/showword',methods=['POST','GET'])
def showword():
    user_id = request.args.get('user_id')
    allWord = []
    allData = db.session.query(Wordbook).filter_by(word_userid=user_id).all()
    for item in allData:
        allWord.append(item.word)
    response = make_response(jsonify(allWord))
    response.mimetype = 'application/json'
    return response




@app.teardown_request
def teardown_request(error):
    db.session.commit()
    db.session.close()
if __name__ == '__main__':
    app.run()

