import './index.css'
import FbImageLibrary from 'react-fb-image-grid'
import { FaCheckCircle } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import { TfiComment } from "react-icons/tfi";
import { RiShareForwardLine } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";





import { AiFillLike } from 'react-icons/ai';


export default function FbPost(props) {
    const { title, date, images, username, profilepic } = props.post
    return (
        <div className='fbPost_container'>
            <div className='header'>
                <img src={profilepic} className='logo-img'></img>
                {/* <div className='name_date_div'>
                    <p className='para para1'>{username}</p>
                    <p className='para para2'>{date}</p>
                </div> */}
                <p className='username_time'>
                    <span className='username'>{username}<FaCheckCircle color='blue' size='15px' className='blue_tick' /></span>
                    <br />
                    <span className='post_time'>{date}<span className='dot_span_world_icon'>.</span> < BiWorld className='world_icon' /></span>
                </p>
            </div>
            <p className='post_description'>{title}</p>
            <div id='grid_id'>
                <FbImageLibrary images={images} />
            </div>
            <div className='like_comment_share_div'>
                <div className='footer_icons_div'>
                    <AiOutlineLike className='footer_icons'/> <span className='footer_icons_name'>Like</span>
                </div>
                <div className='footer_icons_div'>
                    <TfiComment className='footer_icons'/> <span className='footer_icons_name'>Comment</span>
                </div>
                <div className='footer_icons_div'>
                    <RiShareForwardLine className='footer_icons'/>   <span className='footer_icons_name'>share</span>
                </div>
            </div>
        </div>

    )
}






// https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/320400/320448.png

// <p className='post_description'>Alhumdulillah - this team of champions delivered in a nail-biting game. Magnificent innings from Muhammad Rizwan and Nawaz.
// <p> This one is for all those people back in our Pakistan fighting with the floods. ❤️</p>
// </p>