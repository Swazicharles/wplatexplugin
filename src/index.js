import "./index.scss"
import {TextControl,Flex,FlexBlock,FlexItem,Button,Icon,PanelBody,PanelRow,ColorPicker} from "@wordpress/components"
import {InspectorControls,BlockControls,AlignmentToolbar} from "@wordpress/block-editor"
import { MathJax, MathJaxContext } from "better-react-mathjax";


const config = {
  loader: { load: ["[tex]/html"] },
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"]
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"]
    ]
  }
};

(function(){

  let locked = false;
  wp.data.subscribe(function(){
      const results = wp.data.select("core/block-editor").getBlocks().filter(function(block){
          return block.name == "simp/my-latex-quiz" && block.attributes.correctAnswer == undefined
      })

      if(results.length && locked ==false){
          locked = true;
          wp.data.dispatch("core/editor").lockPostSaving("noAnswer");
      }

      if(!results.length && locked){
          locked = false;
          wp.data.dispatch("core/editor").unlockPostSaving("noAnswer");
      }
  });
})();

wp.blocks.registerBlockType("simp/my-latex-quiz",{
    title: "my-latex-quiz",
    icon: "welcome-learn-more",
    category: "common",
    attributes: {
        question:{type:"string", default:`\\(\\frac{10}{4x} \\approx 2^{12}\\)`},
        answers:{type: "array", default:[``]}, 
        correctAnswer:{type: "number", default:undefined },
        bgColor:{type: "string",default: "#EBEBEB"},
        theAlignment: {type: "string", default: "left"}
    },

    edit: EditComponent,
    
    save: function(props){
       return null;
        
  } 
});

function EditComponent(props){

    

     function updateQuestion(value){

      props.setAttributes({question:value})
     }


     function deleteAnswer(indexToDelete){
      const newAnswers = props.attributes.answers.filter(function(x,index){
        return index != indexToDelete;
      });
      props.setAttributes({answers: newAnswers});

      if(indexToDelete == props.attributes.correctAnswer){
        props.setAttributes({correctAnswer:undefined});
      }

     }

     function markAsCorrect(index){
      props.setAttributes({correctAnswer:index});
     }


return (
<div className="latex-quiz-edit-block" style={{backgroundColor: props.attributes.bgColor}}>


            <BlockControls>
                <AlignmentToolbar value={props.attributes.theAlignment} onChange = {x => props.setAttributes({theAlignment: x})}/>
            </BlockControls>
            <InspectorControls>
                <PanelBody title="Background Color" initialOpen = {true}>
                    <PanelRow>
                        <ColorPicker color={props.attributes.bgColor} onChangeComplete={x => props.setAttributes({bgColor: x.hex})} />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
        <MathJaxContext hideUntilTypeset={"first"}>

    <MathJax>
        <TextControl  value ={props.attributes.question} onChange={updateQuestion} label="Question:" style={{fontSize: "20px"}}/>

      </MathJax>
    
        <p style={{fontSize:"13px",margin:"20px 0 8px 0"}}>Answers:</p>
        {props.attributes.answers.map( function (answer, index){

          return (
            <MathJaxContext>
             
            <Flex>
              <FlexBlock>
              
                <TextControl value = {answer} onChange={newValue =>{
                  const newAnswers = props.attributes.answers.concat([]);
                  newAnswers[index] = newValue;
                  props.setAttributes({answers:newAnswers});
                }}/>  
                
                </FlexBlock>
                <FlexItem>
                  <Button onClick={() =>markAsCorrect(index)}>
                    <Icon icon={props.attributes.correctAnswer == index ?"star-filled":"star-empty"} className="mark-as-correct"/>
                  </Button>
                </FlexItem>
                <FlexItem>
                    <Button isLink className="attention-delete" onClick={() => deleteAnswer(index)}>Delete</Button>
                </FlexItem>

            </Flex>
           
            </MathJaxContext>
          )
        })}

       
          <Button isPrimary onClick={()=>{
            props.setAttributes({answers: props.attributes.answers.concat([``])});
          }}> Add Another Answer</Button>
          

        </MathJaxContext>

        
     </div>
     );
}