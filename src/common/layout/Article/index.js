import React, { useState }from 'react';
import { BsStopwatch } from 'react-icons/bs';
import AvatarImg from '../../../static/images/B.svg';
import { GrLike, GrDislike } from 'react-icons/gr';
import {
  ArticleWrap,
  ArticleContainer,
  ContextHeader,
  TopicHeader,
  AvatarContainer,
  Name,
  TopDate,
  IconContainer,
  TopText,
  TopicFooter,
  LikeContainer,
  Button
} from './ArticleElements';
import { IconContext } from 'react-icons/lib';


const Article = (props) => {
  const [showLike, setShowLike ] = useState(false)
  const [removeLike, setRemoveLike ] = useState(false)
  const handleAddlike = () => {
    setShowLike(true)
    setRemoveLike(false)
  }
  const handleRemovelike = () => {
    setShowLike(false)
    setRemoveLike(true)
  }
  return (
    <ArticleWrap>
      <ArticleContainer>
        <ContextHeader>
          <TopicHeader>
            <AvatarContainer src={AvatarImg} alt='avatar' />
            <Name>{props.post.name}</Name>
          </TopicHeader>
          <TopDate>
            <IconContainer>
              <BsStopwatch />
            </IconContainer>
            <h2>{props.post.date}</h2>
          </TopDate>
        </ContextHeader>
        <TopText>{props.post.text}</TopText>
        <TopText>
          category: {`${props.post.category} tags: ${props.post.tags}`}
        </TopText>
        <TopicFooter>
          <LikeContainer>
            <Button
            onClick={handleRemovelike}
            >
            <IconContext.Provider
            value={{size: removeLike ? '1.5em': '1.2em'}}
            >
              <div>
              <GrDislike />
              </div>
            </IconContext.Provider>
            </Button>
            <span>21</span>
          </LikeContainer>
          <LikeContainer>
            <Button
            onClick={handleAddlike}
            >
            <IconContext.Provider 
            value={{size: showLike ? '1.5em': '1.2em'}}
            >
            <div><GrLike /></div>
            </IconContext.Provider>
            </Button>
            <span>08</span>
          </LikeContainer>
        </TopicFooter>
      </ArticleContainer>
    </ArticleWrap>
  );
};

export default Article;
