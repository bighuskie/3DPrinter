# 3Dprinter  项目接口文档

## 登录接口

```js
api: /api/v1/login 

method: post

//请求参数
params: {
    username: String，  // 用户名，具有唯一性
    password: String，  // 用户密码，两者都不为空
}
    
//返回信息
code:  1：登录成功  -1：密码错误  -2：用户不存在

msg: 响应返回的信息说明

data: {
    username: 用户名，
    token: 
}

```

## 注册接口

```js
api: /api/v1/register

method: post

//请求参数
params: {
    username: String，  // 用户名，具有唯一性
    password: String，  // 用户密码，两者都不为空
}

//返回信息
code:  1：注册成功  -1：注册失败  -2：用户已存在

msg: 响应返回的信息说明

```

## 公有模型库所有模型接口

``` js
api: /api/v1/publicModal

method: get
 
//返回信息
code:  1：获取数据库信息成功  	 -1：获取数据库信息失败 

msg: 响应返回的信息说明
//模型信息是一个对象数组
data: [
    {
        mNo: 模型编号，
        mName: 模型名称，
        mPath: 模型stl文件路径，
        mPicPath: 模型预览图路径，
        mType: 模型类别，（动漫手办、创意设计、教育用品）
        pickTimes: 被用户选择打印的次数，
        mfileSize: stl文件的大小 单位是kb
	}
]

```

## 公有模型库 动漫手办 模型接口

```js
api: /api/v1/publicModal/anime

method: get
 
//返回信息
code:  1：获取数据库信息成功  	 -1：获取数据库信息失败 

msg: 响应返回的信息说明
//模型信息是一个对象数组
data: [
    {
        mNo: 模型编号，
        mName: 模型名称，
        mPath: 模型stl文件路径，
        mPicPath: 模型预览图路径，
        mType: 模型类别，（动漫手办、创意设计、教育用品）
        pickTimes: 被用户选择打印的次数，
        mfileSize: stl文件的大小 单位是kb
	}
]

```

## 公有模型库 创意设计 模型接口

```js
api: /api/v1/publicModal/creative_design

method: get
 
//返回信息
code:  1：获取数据库信息成功  	 -1：获取数据库信息失败 

msg: 响应返回的信息说明
//模型信息是一个对象数组
data: [
    {
        mNo: 模型编号，
        mName: 模型名称，
        mPath: 模型stl文件路径，
        mPicPath: 模型预览图路径，
        mType: 模型类别，（动漫手办、创意设计、教育用品）
        pickTimes: 被用户选择打印的次数，
        mfileSize: stl文件的大小 单位是kb
	}
]

```

## 公有模型库 教育用品 模型接口

```js
api: /api/v1/publicModal/education

method: get
 
//返回信息
code:  1：获取数据库信息成功  	 -1：获取数据库信息失败 

msg: 响应返回的信息说明
//模型信息是一个对象数组
data: [
    {
        mNo: 模型编号，
        mName: 模型名称，
        mPath: 模型stl文件路径，
        mPicPath: 模型预览图路径，
        mType: 模型类别，（动漫手办、创意设计、教育用品）
        pickTimes: 被用户选择打印的次数，
        mfileSize: stl文件的大小 单位是kb
	}
]

```

## 私有模型库接口

```js
api: /api/v1/privateModal

method: get

//返回信息
code:  1：获取数据库信息成功  	 -1：用户未登录，无法查看模型库

msg: 响应返回的信息说明
//模型信息是一个对象数组
data: [
    {
        mNo: 模型编号，
        mName: 模型名称，
        mPath: 模型文件路径，
        mPicPath: 模型预览图路径，
        mType: 模型类型，
        pickTimes: 被用户选择打印的次数，
        mfileSize: stl文件的大小 单位是mb
        mTime: 模型上传时间
	}
]

```

## 选择打印机接口

```js
api: /api/v1/printer/select

method: get

//返回信息
code:  1：获取数据库信息成功     -1：获取数据库信息失败

msg: 响应返回的信息说明

data: [ //对象数组
    {
        pNo: 打印机编号， //这个是打印机唯一id
        pName: 打印机名字，
        pPosition: 地理位置，
        pStatus: 打印机当前状态，
        pModal: 打印机型号，
        waitingTime: 等待时间，单位为 min
	}
]

```

## 获取当前打印机状态信息接口

```js
api: /api/v1/printer/currentState

method: get

//请求格式
?id=   打印机的编号，具有唯一性
    
//返回信息
code:  1：获取状态信息成功     -1：获取状态信息失败

msg：响应返回的信息说明

data: {
    currentUser: 当前用户名字，
    info: { //打印机当前状态信息
        pName: 打印机名字，
        pModal: 打印机型号，
    	pStatus: 打印机状态，1表示打印机正在工作，0表示打印机空闲
        pTemperature: 打印机温度，
        pPosition: 打印机地理位置
    }
}

```

## 提交订单接口

```js
api: /api/v1/placeOrder

method: post
//请求参数
params: {
    ohead: {
       itemNum: 商品模型项数量（模型种数）int
       totalPrice: 订单总金额，float类型
    }
    //下面是单个商品
    obody: [
     {
       mNo: 所选模型的编号，int
       pNo: 所选打印机的编号，int
       mQuality: 所选打印模型质量，string
       mSizeL: 模型的长，int
       mSizeW: 模型的宽，int
       mSizeH: 模型的高，int//这三个可以暂时不用
       oNum: 该同种商品的数量，int
       price: 商品的单独金额，float
	 }
     ...
    ]
}

//返回信息
code:  1：提交成功     0：用户未登录，无法提交   -1：提交失败

msg: 响应返回的信息说明

```

## 删除订单接口

```js
api: /api/v1/deleteOrder

method: post
//请求参数
params: {
   oNo: 订单编号，int
}

//返回信息
code:  1：删除成功     0：用户未登录，无法删除   -1：删除失败

msg: 响应返回的信息说明

```

## 查看我的订单接口

```js
api: /api/v1/myOrder

method: get

//返回信息
code:  1：请求成功     -1：请求失败  0：用户未登录，无法查看 

msg: 响应返回的信息说明

data: [ //大数组的元素为一个订单包含的信息
    {
        ohead: {
            oNo: 订单号，string
        	itemNum: 商品模型项数量（模型种数）int
        	totalPrice: 订单总金额，float类型
        	oState: 订单状态,1表示正在进行，0表示已完成
        	oDate: 订单创建日期
        }
        obody: [
            {
			   mNo: 所选模型的编号，int
               pNo: 所选打印机的编号，int
        	   pName: 所选打印机的名称，string
        	   pModal: 所选打印机的型号,string
               pMaterialColor: 打印材料颜色
               pMaterialType: 打印材料类型
               mName: 模型名称
               mfileSize: 模型大小，kb
               mPicPath: 模型预览图路径
               mQuality: 所选打印模型质量，string
               mSizeL: 模型的长，int
               mSizeW: 模型的宽，int
               mSizeH: 模型的高，int
               oNum: 该同种商品的数量，int
               price: 商品的单独金额，float
        	   mType: 模型类型
            }
    		...
        ]
	}
    ...
]

```

## 查看历史订单接口

```js
api: /api/v1/histroyOrder

method: get

//返回信息
code:  1：请求成功     -1：请求失败  0：用户未登录 

msg: 响应返回的信息说明

data: [ //大数组的元素为一个订单包含的信息
    {
        ohead: {
            oNum: 订单号，string
        	itemNum: 商品模型项数量（模型种数）int
        	totalPrice: 订单总金额，float类型
        	oState: 订单状态,1表示正在进行，0表示已完成
        	oDate: 订单创建日期
        }
        obody: [
            {
			   mNo: 所选模型的编号，int
               pNo: 所选打印机的编号，int
        	   pName: 所选打印机的名称，string
        	   pModal: 所选打印机的型号,string
        	   pMaterialColor: 打印材料颜色
               pmaterialType: 打印材料类型
               mName: 模型名称
               mfileSize: 模型大小，kb
               mPicPath: 模型预览图路径
               mQuality: 所选打印模型质量，string
               mSizeL: 模型的长，int
               mSizeW: 模型的宽，int
               mSizeH: 模型的高，int
               oNum: 该同种商品的数量，int
               price: 商品的单独金额，float
            }
    		...
        ]
	}
    ...
]

```

## 获取打印机打印队列

```js
api: /api/v1/printer/queue

method: get

//请求格式
?id=   打印机的编号，具有唯一性
    
//返回信息
code:  1: 获取状态信息成功     -1: 获取状态信息失败

msg: 响应返回的信息说明

data: [ //对象数组，如果打印机处于空闲状态，则没有这个data数组
        {
            mNo:  	模型在模型库中的编号，
            mSizeL: 120,
        	mSizeW: 90,
        	mSizeH: 80,
        	mPath: 模型stl路径,
            pName: 	打印机名称，
            pModal: 打印机型号
            mQuality: 质量类型，
            pMaterialColor: 打印材料颜色，为一个16进制色号，
            pMaterialType:打印材料类型，
            tName:		订单用户名字
            oDate:      订单生成时间，以转换为时间格式的字符串
            estimatedTime:  预计打印完成时间，int，单位 s
        }
    ]  
```

## 调整打印机打印队列接口(废弃)

```js
api: /api/v1/printer/adjustQueue

method: post
//请求参数
params: {
    mNo: 该打印机的编号
    newQueue: [
        {
            mNo:  	模型在模型库中的编号，
            pName: 	打印机名称，
            pModal: 打印机型号
            mQuality: 质量类型，
            pMaterialColor: 打印材料颜色，为一个16进制色号，
            pMaterialType:打印材料类型，
            tName:		订单用户名字
            oDate:      订单生成时间，以转换为时间格式的字符串
            estimated_time:  预计打印完成时间，int，单位 min
    	}
    ]
}

//返回信息
code: 1:发送成功   2： 发送失败

msg: 响应返回的信息说明
```

