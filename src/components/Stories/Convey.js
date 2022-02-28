import React, { useState, useEffect, useRef } from "react"
import { BiXCircle } from "react-icons/bi"

    
    
const ColorPalette = (props) => {

//     const elementRef = useRef();

//     useEffect(() => {
//         initViz()
//     }, [])
  
//     const options = {
//         width: "800px",
//         height: "500px",
//         hideTabs: true,
        
//     }
 
//   const initViz = () => {
//     const vizUrl = "https://public.tableau.com/views/NYCIncomeDisparity/NYCIncomeDisparityMap?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
    
//     const vizContainer = elementRef.current;
//     let viz = new window.tableau.Viz(vizContainer, vizUrl, options)
//   }
 
    return(
        <div className="overlay">
            <p className="overlay-exit"
            onClick={() => props.exitButtonProps(props.keyProps)}
            >
                    <BiXCircle/>
            </p>
            <div className="overlay-container">
            <h4 className="overlay-text">HOW CANDIDE WAS BROUGHT UP IN A MAGNIFICENT CASTLE, AND HOW HE WAS EXPELLED THENCE.</h4>
            
            {/* <div ref={elementRef}></div> */}
            <p className="overlay-text">CANDIDE
        
    In a castle of Westphalia, belonging to the Baron of Thunder-ten-Tronckh, lived a youth, whom nature had endowed with the most gentle manners. His countenance was a true picture of his soul. He combined a true judgment with simplicity of spirit, which was the reason, I apprehend, of his being called Candide. The old servants of the family suspected him to have been the son of the Baron's sister, by a good, honest gentleman of the neighborhood, whom that young lady would never marry because he had been able to prove only seventy-one quarterings, the rest of his genealogical tree having been lost through the injuries of time.

    The Baron was one of the most powerful lords in Westphalia, for his castle had not only a gate, but windows. His great hall, even, was[Pg 2] hung with tapestry. All the dogs of his farm-yards formed a pack of hounds at need; his grooms were his huntsmen; and the curate of the village was his grand almoner. They called him "My Lord," and laughed at all his stories.

    The Baron's lady weighed about three hundred and fifty pounds, and was therefore a person of great consideration, and she did the honours of the house with a dignity that commanded still greater respect. Her daughter Cunegonde was seventeen years of age, fresh-coloured, comely, plump, and desirable. The Baron's son seemed to be in every respect worthy of his father. The Preceptor Pangloss[1] was the oracle of the family, and little Candide heard his lessons with all the good faith of his age and character.

    Pangloss was professor of metaphysico-theologico-cosmolo-nigology. He proved admirably that there is no effect without a cause, and that, in this best of all possible worlds, the Baron's castle was the most magnificent of castles, and his lady the best of all possible Baronesses.

    "It is demonstrable," said he, "that things cannot be otherwise than as they are; for all being created for an end, all is necessarily for the best end. Observe, that the nose has been formed to bear spectacles—thus we have spectacles. Legs are visibly designed for stockings[Pg 3]—and we have stockings. Stones were made to be hewn, and to construct castles—therefore my lord has a magnificent castle; for the greatest baron in the province ought to be the best lodged. Pigs were made to be eaten—therefore we eat pork all the year round. Consequently they who assert that all is well have said a foolish thing, they should have said all is for the best."

    Candide listened attentively and believed innocently; for he thought Miss Cunegonde extremely beautiful, though he never had the courage to tell her so. He concluded that after the happiness of being born of Baron of Thunder-ten-Tronckh, the second degree of happiness was to be Miss Cunegonde, the third that of seeing her every day, and the fourth that of hearing Master Pangloss, the greatest philosopher of the whole province, and consequently of the whole world.

    One day Cunegonde, while walking near the castle, in a little wood which they called a park, saw between the bushes, Dr. Pangloss giving a lesson in experimental natural philosophy to her mother's chamber-maid, a little brown wench, very pretty and very docile. As Miss Cunegonde had a great disposition for the sciences, she breathlessly observed the repeated experiments of which she was a witness; she clearly perceived [Pg 4]the force of the Doctor's reasons, the effects, and the causes; she turned back greatly flurried, quite pensive, and filled with the desire to be learned; dreaming that she might well be a sufficient reason for young Candide, and he for her.

    She met Candide on reaching the castle and blushed; Candide blushed also; she wished him good morrow in a faltering tone, and Candide spoke to her without knowing what he said. The next day after dinner, as they went from table, Cunegonde and Candide found themselves behind a screen; Cunegonde let fall her handkerchief, Candide picked it up, she took him innocently by the hand, the youth as innocently kissed the young lady's hand with particular vivacity, sensibility, and grace; their lips met, their eyes sparkled, their knees trembled, their hands strayed. Baron Thunder-ten-Tronckh passed near the screen and beholding this cause and effect chased Candide from the castle with great kicks on the backside; Cunegonde fainted away; she was boxed on the ears by the Baroness, as soon as she came to herself; and all was consternation in this most magnificent and most agreeable of all possible castles.[Pg 5]



    </p>
            </div>
        </div>
    )   
}

export default ColorPalette