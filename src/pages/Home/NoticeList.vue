<template>
<Frame title="公告">
<div class="mui-content">
<ul class="mui-table-view">
    <li class="mui-table-view-cell" v-for="notice in notices">
			{{notice.title}}
		</li>
</ul>

</div>
</Frame>
</template>
<script>
/**预下单 */
import $ from 'axios';
import {replaceVars} from '@/utils/index';
import Frame from '@/components/Frame';

export default {
	components: {
		Frame
	},
	data() {
		return {
			notices: [
				{ title: '更新公告', create_time: '2018-07-26' },
				{ title: '停机公告', create_time: '2018-06-30' },
				{ title: '出错补偿说明', create_time: '2018-08-01' }
			]
		};
	}
}
</script>