import './App.css';


const Profile = (props) =>{
    console.log(props);
    return(
        <article className="profile-card">
          <img src={props.thumbnail} alt="image" />
          <h2 className="title">{props.title}</h2>
          <a href={props.url} className="button">details</a>
        </article>
    )
  }

  export default Profile;