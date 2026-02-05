interface Base {
    id: string;
}
interface User extends Base {
	firstName: string;
	lastName: string;
}

interface Post extends Base {
	title: string;
	body: string;
}

interface Comment extends Base {
	comment: string;
}

const user: User = {
    id: "1",
    firstName: "Tom",
    lastName: "Cruise",
};

type UserPost = User & Comment;

const returnUserComment = (user: User): UserPost =>{
    const userPost = {...user, 
        comment: "I give it everything — that's why I work so hard."};
    return userPost;
};

console.log(returnUserComment(user));

