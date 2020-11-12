import React,{useState} from 'react';
import './ShowList.css';
import { AiOutlineHeart } from 'react-icons/ai';

const rating = (rating) => {
    if(rating>=7){
        return 'green';
    }else if(rating >=5){
        return 'orange';
    }else{
        return 'red';
    }
}

const ShowList = (props) => {

    const [abc,setAbc] = useState("iconStyle");

    const stringTagRemove = (i) => {

        let str = props.data[i].show.summary;
        if ((str===null) || (str==='')){
            return 'NA';
        }
        else
        {
            str = str.toString();
            return str.replace( /(<([^>]+)>)/ig, '');
        }
    }

    const changeColor = (i) => {
        setAbc("changed");
    }

    return(
        <>
            <div className="show-container">
            {props.data.map((val,i) => (
                <div className="show" key={i}>
                    <img src={val.show.image ? val.show.image['original'] : "https://images.unsplash.com/photo-1582091652153-eb8f55ff7cd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" } alt="" />
                    <div className="show-info">
                        <h3>{val.show.name}</h3>
                        <span className={`rating ${rating(val.show.rating['average'])}`}>{val.show.rating['average'] !== null ? val.show.rating.average : 'NA'}</span>
                    </div>
                    <div className="show-over">
                        <h3>
                            <i>Genre: </i>
                            <span className="highlight">{val.show.type}</span>
                            <span className={`${abc}`} onClick = {(e) => {changeColor("red");props.addFavourites(i);}}><AiOutlineHeart size={24} fill="red" /></span>    
                        </h3>
                        <h2>overview :</h2>
                        <p>{stringTagRemove(i)}</p>
                    </div>
                </div>
            ))}
            </div>
        </>
    );
}

export default ShowList;