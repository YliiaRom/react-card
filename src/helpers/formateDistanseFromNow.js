import { formatDistanceToNow } from 'date-fns';

const formateDateToNow = postedAt => {
  return formatDistanceToNow(new Date(postedAt), {
    addSuffix: true,
  });
};
export default formateDateToNow;
