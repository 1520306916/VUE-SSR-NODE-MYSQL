<template>
  <div class="icon-link">
			<ul>
				<li v-for="(item, index) in indexClass" :key="index">
					<nuxt-link to="/coursehome">
						<img width="40" :src="item.showClassImg" alt="" />
						<p>{{item.showClassName}}</p>
					</nuxt-link>
				</li>
			</ul>
		</div>
</template>


<script>
export default {
  props: ['indexClass']

}
</script>


<style scoped>
  .icon-link {
    clear: both;
    padding-top: 16px;
    position: relative;
    background-color: #fff;
  }
  a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  ul {
    clear: both;
    list-style: none;
    padding: 0;
    text-align: center;
    overflow: hidden;
    background-color: #fff;
  }
  li {
    float: left;
    width: 20%;
    margin-bottom: 16px;
  }
  p {
    font-size: 12px;
    color: #484848;
    margin-top: 7px;
  }
  a{
    text-decoration: none;
  }
</style>



