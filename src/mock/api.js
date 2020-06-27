import Mock from 'mockjs'
Mock.mock('/api/user/login',{
    "status": 0,
    "data": {
        "id|10001-12000": 0,
        "username":"@name",
        "email": '@email',
        "phone": /^1[3456789]\d{9}$/,
        "role":0,
        "createTime":"@DATETIME('yyyy-MM-dd HH:mm:ss')",
        "updateTime":"@now('yyyy-MM-dd HH:mm:ss')"
    }
});