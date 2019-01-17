-- 基本表
-- 创建教师表
create table Teacher
(tNo   int(9)  primary key,/*主键*/
 tName char(20) unique,  /*唯一值*/
 tSex  enum('男','女') not null,
 tPhone char(11) not null,
 tCom  varchar(20) not null,
 tPassword varchar(32) not null
);


-- 创建3D打印机提供商表
create table Supplier_3D
(supNo   int(9)  primary key,/*主键*/
 supName char(20) unique,  /*唯一值*/
 supAdd  varchar(40),
 supPhone char(11) not null,
 supPassword varchar(32) not null
);

-- 创建3D打印机表
create table Printer_3D
(pNo   int(9)  primary key,/*主键*/
 pName char(20) unique,  /*唯一值*/
 manufacturer  varchar(10),
 pExtruderNum int(2) not null,
 pCrossHeight FLOAT(8) not null,
 pXRange FLOAT(8) not null,
 pYRange FLOAT(8) not null,
 pZRange FLOAT(8) not null,
 pChassisShape varchar(16),
 pGCodeStyle varchar(16),
 pMaterialType varchar(16) not null,
 pHeatedBed enum('1','0') not null,
);

-- 创建学生表
create table Student
(sNo   int(9)  primary key,/*主键*/
 sName char(20) unique,  /*唯一值*/
 sSex  enum('男','女') not null,
 sEdu char(20) not null,
 sPassword varchar(32) not null,
 tNo int(9),
 foreign key (tNo) references Teacher(tNo)
);

-- 创建3D打印模型表
create table Module_3D
(mNo   int(9)  primary key,/*主键*/
 mName char(20) unique,  /*唯一值*/
 mSize  int(6),
 mPath  varchar(256),
 mQuality  varchar(16),
 mMaterialColor  varchar(16),
 mMaterialType varchar(16),
 mMaterialLength float(16),
 mTime  float(16),
 mType char(5) not null,
 mPrice int(9) not null,
 mDelete enum('1','0') DEFAULT '0' not null
);

-- 创建打印订单表
create table OrderList
(mNo int(9),
 pNo  int(9),
 tNo int(9),
 coNO    varchar(9),
 oState  varchar(10) not null,
 oDate varchar(10),
 primary key (mNo,pNo,tNo,oNo),
 foreign key (tNo) references Teacher(tNo),
 foreign key (mNo) references Module_3D(mNo),
 foreign key (pNo) references Printer_3D(pNo)
);

-- 创建模型上传表(先不)
create table UploadList
(mNo int(9),
 uNo  int(9),
 uType    varchar(9),
 uState  varchar(10) not null,
 uDate varchar(10),
 primary key (mNo,uNo),
 foreign key (mNo) references Module_3D(mNo)
);


-- 创建管理员表
create table Admin
(aNo   int(9)  primary key,/*主键*/
 aName char(20) unique,  /*唯一值*/
 apwd varchar(20) not null
);


-- 视图
-- 创建教师登录视图
create view Teacher_login as select tName,tPassword,tNo FROM Teacher;



-- 触发子