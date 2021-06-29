#! /bin/bash

if heroku restart
then
    echo "伺服端己經重啟"
else
    echo "伺服端重啟失敗"
fi 