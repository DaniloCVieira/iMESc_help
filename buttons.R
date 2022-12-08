library(shiny)

ui<-fluidPage({
  column(12,style="margin: 100px",

         actionButton("button","button")

         )
})

server<-function(input,output,session){
  observeEvent(input$button,{
    showm})
}
