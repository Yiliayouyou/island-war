<template>
    <div class="game-setting">
        <div class="left-top">
            左上
        </div>
        <div class="right-top">
            右上
        </div>

        <div class="main-setting">
            <div class="left data-show">
                <div class="box-title">
                    <span class="title-content">{{datasShowTitle}}</span>
                </div>
            </div>
            <div class="center build-island">
                <div class="box-title">
                    <span class="title-content">编辑岛屿</span>
                </div>
                <div class="edit-area">
                    <div class="left-buttons">
                        <div>保存</div>
                        <div>删除</div>
                        <div>刷新</div>
                    </div>
                    <div class="edit-blocks">
                        <div :key="i" v-for="(row, i) in blocksData" class="row">
                            <div :key="j" v-for="(col, j) in row" class="block" @drop='drop($event)' @dragover='allowDrop($event)'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right tools">
                <div class="box-title">
                    <span class="title-content">工具箱</span>
                </div>
                <div class="tool-blocks">
                    <div :key="i" v-for="(row, i) in toolData" class="row">
                        <div :key="j" v-for="(col, j) in row" class="block">
                            <div draggable="true" class="block-content" @dragstart='drag($event)'>
                                {{col.data}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div @click="back" class="back-line">
            <button>返回地图</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dom: null,
            datasShowTitle: '统计数据',
            blocksData: [
                [{
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }], 
                [{
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }],
                [{
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }],
                [{
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }],
                [{
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }],
                [{
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }, {
                    type: 0
                }]],
                toolData: [
                    [{
                        type: 0,
                        data: 1
                    }, {
                        type: 0,
                        data: 2
                    }, {
                        type: 0,
                        data: 3
                    }, {
                        type: 0,
                        data: 4
                    }],
                    [{
                        type: 0
                    }, {
                        type: 0
                    }, {
                        type: 0
                    }, {
                        type: 0
                    }],
                    [{
                        type: 0
                    }, {
                        type: 0
                    }, {
                        type: 0
                    }, {
                        type: 0
                    }],
                    [{
                        type: 0
                    }, {
                        type: 0
                    }, {
                        type: 0
                    }, {
                        type: 0
                    }]
                ]
        };
    },
    methods: {
        back() {
            this.$router.push({
                name: 'LevelMap'
            });
        },
        drag(e) {
            this.dom = e.currentTarget;
        },
        drop(e) {
            e.preventDefault();
            e.target.appendChild(this.dom);
        },
        allowDrop(e) {
            e.preventDefault();
        }
    }
};
</script>


<style scoped lang="less">
.game-setting {
    position: relative;
    height: 100%;
    .main-setting {
        display: flex;
        height: calc(100vh - 120px);
        padding: 60px 30px;
        .left, .right, .center {
            border: 2px solid black;
        }
        .left, .right {
            width: 20%;
            height: calc(100% - 40px);
        }
        .center {
            width: 60%;
        }
        .box-title {
            text-align: center;
            .title-content {
                border: 1px solid grey;
                padding: 4px 8px;
                border-top: 0;
                border-radius: 0 0 6px 6px;
            }
        }
    }
    .back-line {
        position: fixed;
        width: 100%;
        bottom: 16px;
        text-align: center;
    }
}
.edit-area {
    .edit-blocks {
        border: 1px solid #e8e8e8;
    }
}
.row {
    display: flex;
    .block {
        width: 60px;
        height: 60px;
        border: 1px solid #c8c8c8;
        .block-content {
            cursor: pointer;
            width: 100%;
            height: 100%;
        }
    }
}
</style>

