<template>
    <div id="meal">
        <div id="alert-center">
            <v-alert
            type="info"
             id="alert"
             v-if="alert == true"
             
            >잠시만 기다려 주시면 로딩이 완료됩니다 :)</v-alert>
        </div>
        <iframe @load="alert = false" width="100%" height="780px" id="meal-info" src="http://school.gyo6.net/gbsw/203678/food" frameborder="0"></iframe>
    </div>
</template>
<script>
export default {
    data() {
        return {
            alert : true
        }
    },
}
</script>
<style lang="scss">
    #alert-center{
        width: 100%;
        
    }
    #alert{
        left: 50%; transform: translateX(-50%);
        margin-top: 20px;
        position: absolute;
        width: 420px;
        text-align: center;
        display: block;
    }
    #meal{
        justify-items: center;
        width: 100%;
        
    }

</style>