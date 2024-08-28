import './button.css'

function Button(props){

    return(
        <>
            <div className='btn-container'>
                <button className='btn' >{props.content}</button>
            </div>
        </>
    );

}

export default Button;
