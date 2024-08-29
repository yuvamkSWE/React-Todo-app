import './button.css'

function Button(props){

    return(
        <>
            <div className='btn-container'>
                <button className='btn' onClick={props.onClick}>{props.content}</button>
            </div>
        </>
    );

}

export default Button;
