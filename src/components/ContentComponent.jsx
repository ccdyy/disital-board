import React from 'react';

const ContentComponent = () => {
  return (
    <div className='content flex-col ml-8 box-border-none'>
      <div className='intro flex box-border-none mb-10'>
        <img className='w-20 h-20 rounded-xl object-cover mr-4' src='https://picsum.photos/id/1018/400/400' alt='content' />
        <div className='flex-col justify-center items-center mr-4'>
            <h1 className='font-bold'>Pura 70 Ultra</h1>
            <p>价格范围：￥1000 - ￥6000</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quam.</p>
        </div>
        <div className='hidden md:flex justify-center items-center w-40 h-10 bg-slate-200 rounded-md'>
          + 加入对比
        </div>
      </div>
      <div className='platform flex mb-4'>
        <ul className='flex flex-wrap'>
          <li className='flex justify-center items-center mr-1 cursor-pointer w-20 h-10 border-r-2 border-slate-100'>基本信息</li>
          <li className='flex justify-center items-center mr-1 cursor-pointer w-20 h-10 border-r-2 border-slate-100'>淘宝</li>
          <li className='flex justify-center items-center mr-1 cursor-pointer w-20 h-10 border-r-2 border-slate-100'>京东</li>
          <li className='flex justify-center items-center mr-1 cursor-pointer w-20 h-10 border-r-2 border-slate-100'>拼多多</li>
          <li className='flex justify-center items-center mr-1 cursor-pointer w-20 h-10'>其他</li>
        </ul>
      </div>
      <div className='detail flex flex-col justify-start items-start'>
        <div className='flex justify-start'>
          <ul className='flex flex-wrap justify-start items-start'>
            <li className='md:w-1/3 mb-2 truncate'>华为型号：NA</li>
            <li className='md:w-1/3 mb-2 truncate'>品牌：Huawei/华为</li>
            <li className='md:w-1/3 mb-2 truncate'>售后服务：全国联保</li>
            <li className='md:w-1/3 mb-2 truncate'>分辨率：2844 × 1260</li>
            <li className='md:w-1/3 mb-2 truncate'>机身颜色：罗兰紫 雪域白 羽纱黑</li>
            <li className='md:w-1/3 mb-2 truncate'>套餐类型：官方标配</li>
            <li className='md:w-1/3 mb-2 truncate'>后置摄像头：5000万+1250万+4800万</li>
            <li className='md:w-1/3 mb-2 truncate'>生产企业：华为终端有限公司</li>
            <li className='md:w-1/3 mb-2 truncate'>存储容量：12GB+512GB 12GB+1TB</li>
            <li className='md:w-1/3 mb-2 truncate'>屏幕材质：OLED</li>
            <li className='md:w-1/3 mb-2 truncate'>手机类型：智能手机</li>
            <li className='md:w-1/3 mb-2 truncate'>摄像头类型：前一后三</li>
            <li className='md:w-1/3 mb-2 truncate'>网络模式：双卡双待</li>
            <li className='md:w-1/3 mb-2 truncate'>电信设备进网许可证编号：02-D710-2</li>
            <li className='md:w-1/3 mb-2 truncate'>屏幕刷新率：120Hz</li>
            <li className='md:w-1/3 mb-2 truncate'>版本类型：中国大陆</li>
            <li className='md:w-1/3 mb-2 truncate'>CPU品牌：NA</li>
            <li className='md:w-1/3 mb-2 truncate'>上市时间：2024-04</li>
            <li className='md:w-1/3 mb-2 truncate'>屏幕尺寸：6.8英寸</li>
            <li className='md:w-1/3 mb-2 truncate'>电池容量：5050mAh</li>
            <li className='md:w-1/3 mb-2 truncate'>CPU型号：NA</li>
            <li className='md:w-1/3 mb-2 truncate'>充电功率：100W有线+80W无线</li>
            <li className='md:w-1/3 mb-2 truncate'>前置摄像头像素：1300万像素</li>
            <li className='md:w-1/3 mb-2 truncate'>商品系列：Pura系列</li>
            <li className='md:w-1/3 mb-2 truncate'>3C证书编号：2022011606490096</li>
          </ul>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <img src="https://img.alicdn.com/imgextra/i2/2215880076345/O1CN01FZdI6c1wk3zLQdffG_!!2215880076345-0-scmitem361000.jpg" alt="" />
          <img src="https://img.alicdn.com/imgextra/i4/2215880076345/O1CN0126f0pe1wk3zLQe8kY_!!2215880076345-0-scmitem361000.jpg" alt="" />
        </div>

      </div>
    </div>
  );
};

export default ContentComponent;