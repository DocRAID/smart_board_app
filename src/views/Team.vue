<template>
    <div>
        <head>
            
        </head>
        <h1>여기는 회의용이 아닌 임시로 만든 작업실 실험실입니다</h1>
        
        <v-time-picker
      format="24hr"
      elevation="15"
    ></v-time-picker>
        <v-card
        
        width= "70%"
        style="margin-left: 15%"
        
        >
           <template>
  <v-card
    >
    <v-toolbar
      flat
      color="blue-grey"
      dark
      
    >
      <v-toolbar-title>Submit to post</v-toolbar-title>
    </v-toolbar>

    <v-card-text >
      <v-text-field
        filled
        label="제목"
        value="제목을 적어주세요!"
      ></v-text-field>

      <v-textarea
        filled
        
        label="내용"
        value="내용을 기재해주세요!"
      ></v-textarea>

     

      
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="success"
        depressed
      >
        Post
      </v-btn>
    </v-card-actions>
  </v-card>
 </template>
            
    </v-card>    
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
  
</style>