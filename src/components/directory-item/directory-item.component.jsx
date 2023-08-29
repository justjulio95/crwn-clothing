import { DirectoryItemContainer, BackgroundImage, Body } from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  // destructure props
  const { imageUrl, title } = category;

  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl}/>
      <Body className="body" to={`shop/${title}`}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  )
};

export default DirectoryItem;