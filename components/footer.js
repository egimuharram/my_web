export default ({blue,yellow,grey}) => (
    <div className="text-center footer">
            <ul>
                <li onClick={blue}><i className="fa fa-circle" style={{color:'#34e89e'}}></i></li>
                <li onClick={yellow}><i className="fa fa-circle" style={{color:'yellow'}}></i></li>
                <li onClick={grey}><i className="fa fa-circle" style={{color:'#F8F8F8'}}></i></li>
            </ul>
            <h4>faikarghass &copy; 2018</h4>
    </div>
)