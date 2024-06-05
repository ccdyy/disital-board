import React from 'react';

const SearchComponent = () => {
  return (
    <div className='flex justify-start items-center h-10 mb-14 md:mb-4'>
        <ul className='flex flex-wrap text-sm md:text-normal font-normal leading-5 text-'>
          <li className='flex items-center mr-4'>
            <select name="brand" className="border-2 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white">
                <option value="all" selected>全部品牌</option>
                <option value="apple">苹果</option>
                <option value="huawei">华为</option>
                <option value="xiaomi">小米</option>
                <option value="oppo">OPPO</option>
                <option value="vivo">VIVO</option>
                <option value="zte">中兴</option>
                <option value="samsung">三星</option>
                <option value="honor">荣耀</option>
                <option value="sony">索尼</option>
                <option value="nokia">诺基亚</option>
            </select>
          </li>
          <li className='flex items-center mr-4'>
            <select name="type" className="border-2 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white">
                <option value="all" selected>全部类型</option>
                <option value="phone">手机</option>
                <option value="tablet">平板</option>
                <option value="laptop">笔记本</option>
                <option value="smartwatch">智能手表</option>
                <option value="smartglasses">智能眼镜</option>
                <option value="smarthome">智能家居</option>
            </select>
          </li>
          <li className='flex items-center mr-4'>
            <select name="size" className="border-2 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white">
                <option value="all" selected>全部尺寸</option>
                <option value="5.5">5.5英寸</option>
                <option value="6">6英寸</option>
                <option value="6.5">6.5英寸</option>
                <option value="7">7英寸</option>
                <option value="7.5">7.5英寸</option>
                <option value="8">8英寸</option>
                <option value="9">9英寸</option>
                <option value="10">10英寸</option>
            </select>
          </li>
          <li className='flex items-center mr-4'>
            <input type="number" name="price-min" className="w-36 border-2 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white" placeholder='最低价' />
            <span className='mx-2'>-</span>
            <input type="number" name="price-max" className="w-36 border-2 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white" placeholder='最高价' />
          </li>
          <li className='flex items-center mr-4'>
            <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>查询</button>
          </li>
        </ul>
    </div>
  );
};

export default SearchComponent;