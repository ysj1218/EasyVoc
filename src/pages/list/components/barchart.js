import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

export default class EchartsTest extends Component {
	 render() {
        return (
            <div  id="main" style={{ width: 500, height: 500 }}></div>
        );
    }
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: { 
                text: 'ECharts' 
            },
            tooltip: {},
            xAxis: {
                data: ["大家说英语", "空中英语", "科学美国人", "美国脱口秀", "外教课堂", "BBC听力资料"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
   
}