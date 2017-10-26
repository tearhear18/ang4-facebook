import { IComment } from '../comment/comment-interface';

export interface IPost {
    id?: number;
    content?: string;
    comments?: IComment[];
}
