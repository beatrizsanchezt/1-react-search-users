import classes from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li>
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
