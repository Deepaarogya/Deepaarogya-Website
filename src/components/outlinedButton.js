export default function OutlinedButton({widthInPercent='100%',height='40px', borderRadius='10px',color='#fff',borderColor='#0244f9', onClick, buttonName}){

    var style = {
    width: widthInPercent,
    height: height,
    borderRadius: borderRadius,
    borderColor:borderColor,
    borderWidth:'3px',
    background: 'none',
    color: color,
    fontWeight: 'bold',
    paddingLeft: '40px',
    paddingRight: '40px',
    fontFamily:'Arial, Helvetica, sans-serif'
}
    return (
        <button type="submit" style={style} onClick={onClick}>{buttonName}</button>
    );
}