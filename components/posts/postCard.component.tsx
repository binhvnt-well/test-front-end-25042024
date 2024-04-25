
import { Posts } from '@/base/types/posts';
import Link from 'next/link';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

type PostCard = {
  post: Posts
}
export default function PostCard({ post }: PostCard) {
  const tooltip = (
    <Tooltip id="tooltip">
      {post.title}
    </Tooltip>
  );

  return (
    <>
      <div className='post-card'>
        <OverlayTrigger placement="bottom" overlay={tooltip}>
          <Link href={`posts/${post.id}`}><h2 className='title'>{post.title}</h2></Link>
        </OverlayTrigger>
        <p>{post.body}</p>
      </div>
    </>
  )
}
