import { useRef } from "react";
import "./otp.css";


type OtpInputType = {
    totalInputs: number;
}


export const OtpInput = ({ totalInputs }: OtpInputType) => {
    const inputRef=useRef<HTMLInputElement[]>([])
    
    return (<div>

        {
            new Array(totalInputs).fill(1).map((el, index) => (
                <input
                    className="otpInput"
                    type="text"
                    key ={index}
                    maxLength={1}
                  
                    onKeyUp={(e)=>{
                        if (e.code === "Backspace") {
                            inputRef.current[index - 1].focus();
                            inputRef.current[index - 1].select();
                        } else {
                            inputRef.current[index + 1].focus();
                        }
                     
                    }}
                    

                    ref={(element) => {

                        if (inputRef.current && element) {
                        inputRef.current[index]=element;      
                        }
                        console.log(inputRef.current[index]);
                    }}
                    
                
                />
            ))
        }
    </div>
        
    )

    
}