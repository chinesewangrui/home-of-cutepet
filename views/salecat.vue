<template>
    <div>
        <my-header></my-header>
        <main class="container text-center">
            <!-- 卖 -->
            <!-- title VARCHAR(128), #主标题 -->
            <div>
                <span>宠物名：</span>  
                <input placeholder="请输入您的宠物名">  
            </div>
            <!-- subtitle VARCHAR(128),  #副标题 -->
            <div>
                <span>宠物概述：</span>  
                <input placeholder="请概述您要寄售的宠物信息">  
            </div>
            <!-- family_id INT,      #宠物品种家族编号 -->
            <div>
                <span>品种：</span>  
                <!-- <input placeholder="请输入您的宠物名">   -->
                <!-- 复选框 
                (0,'波斯猫'),
                (1,'布偶猫'),
                (2,'加拿大无毛猫'),
                (3,'美国短毛猫'),
                (4,'挪威森林猫'),
                (5,'暹罗猫'),
                (6,'英国短毛猫'),
                (7,'苏格兰折耳猫'),
                (8,'孟买猫'),
                (9,'加菲猫'),
                (10,'孟加拉豹猫');-->
            </div>
            <!-- price DECIMAL(10,2),#价格 -->
            <div>
                <span>预期价格：</span>  
                <input placeholder="请输入您的预期价格">  
            </div>
            <!-- aname VARCHAR(32),#宠物昵称 -->
            <div>
                <span>宠物昵称：</span>  
                <input placeholder="请输入您的宠物昵称">  
            </div>
            <!-- age INT,    #宠物年龄 -->
            <div>
                <span>宠物年龄：</span>  
                <input placeholder="请输入您的宠物年龄">天  
            </div>
            <!-- details VARCHAR(256),#宠物详情 -->
            <div>
                <span>宠物详情：</span>  
                <input placeholder="请输入您的宠物详情">  
            </div>
            <!-- oldmaster VARCHAR(32),#宠物原主 -->
            <div>
                <span>联系人：</span>  
                <input placeholder="请输入您的姓名">  
            </div>
            <!-- phone   CHAR(11),    #电话 -->
            <div>
                <span>联系电话：</span>  
                <input placeholder="请输入您的联系电话">  
            </div>
            <!-- says VARCHAR(256),#原主人寄语 -->
            <div>
                <span>寄语：</span>  
                <input placeholder="对您的爱宠未来主人说点什么...">  
            </div>
            <!-- adress     VARCHAR(128),#地址 -->
            <div>
                <span>地址：</span>  
                <!-- 复选框 省市县 -->
            </div>
            <!-- saletime DATE,#寄售时间 获取当前时间-->
            <!-- is_onsale BOOLEAN,#是否可以免费认领 -->
            <div>
                <span>喵赠有缘：</span>  
                <!-- 单选框 是 否 -->
            </div>
            <!-- lg VARCHAR(128),#大图 -->
            <div>
                <span>上传图片：</span> 
                <!-- 上传文件 -->
            </div>
            <mt-button @click="submit">提交</mt-button>
            <!-- 买 -->
        </main>
        <my-footer></my-footer>
    </div>
</template>
<script>
export default {
    
}
</script>
<style  scoped>

</style>