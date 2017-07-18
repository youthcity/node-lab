# JWT

## 相关资料

- [JWT 简介](https://segmentfault.com/a/1190000005047525)

## JWT的结构

JWT包含了使用.分隔的三部分：

- Header 头部
- Payload 负载
- Signature 签名

结构如下:
`xxxxx.yyyyy.zzzzz`

### Header

内容：包含token类型和采用的加密算法,然后Base64Url进行编码作为JWT的第一部分

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

### Payload  **我们存东西的部分**

包含claims，然后Base64Url进行编码作为JWT的第二部分

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

### Signature

内容：创建签名的过程，需要使用编码后的header和payload、秘钥，使用header的指定算法进行签名。具体例子如下：

```javascript
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

作用： 签名用于验证消息的发送者以及消息是没有经过篡改的。
