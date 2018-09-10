<template>
    <div class="level-map">
        <div class="left-top">
            左上
        </div>
        <div class="right-top">
            右上
        </div>
        <div class="left-bottom">
            <div class="legend-list">
                图例
            </div>
        </div>
        <div class="right-bottom">
            <button @click="editIsland">编辑岛屿</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        editIsland() {
            this.$router.push({
                name: 'Settings'
            });
        }
    }
};
</script>

<style scoped lang="less">
.level-map {
    position: relative;
    height: 100%;
    .legend-list {
        color: red;
    }
}
</style>
