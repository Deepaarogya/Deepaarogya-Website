export default function FilledButton({widthInPercent='100%',heightPx='40px', borderRadius='10px',color='#0d0d57',background='#d3d6da', buttonName, onClick}){
    var style = {
    width: widthInPercent,
    height: heightPx,
    borderRadius: borderRadius,
    background: background,
    color: color,
    fontWeight: '1000',
    border:'none',
    paddingLeft:'20px',
    paddingRight:'20px',
    fontFamily:'Arial, Helvetica, sans-serif'
}

    return (
        <button type="submit" style={style} onClick={onClick}>{buttonName}</button>
    );
}