import React from 'react'
import { Carousel,SearchBar ,Icon,Grid} from 'antd-mobile'
import style from './index.module.scss'
export default class Demo extends React.Component{
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
        news:['111','222','333','4444'],
        listContent:[
            {text:'mayday1',icon:require('@/assets/images/1.jpg'),num:'70万'},
            {text:'mayday2',icon:require('@/assets/images/2.jpg'),num:'70万'},
            {text:'mayday3',icon:require('@/assets/images/3.jpg'),num:'70万'},
            {text:'mayday4',icon:require('@/assets/images/1.jpg'),num:'70万'},
            {text:'mayday5',icon:require('@/assets/images/2.jpg'),num:'70万'},
            {text:'mayday5',icon:require('@/assets/images/2.jpg'),num:'70万'},
            {text:'mayday5',icon:require('@/assets/images/2.jpg'),num:'70万'},
            {text:'mayday5',icon:require('@/assets/images/2.jpg'),num:'70万'},
            {text:'mayday5',icon:require('@/assets/images/2.jpg'),num:'70万'},
            {text:'mayday5',icon:require('@/assets/images/2.jpg'),num:'70万'},
            {text:'mayday5',icon:require('@/assets/images/2.jpg'),num:'70万'},
            {text:'mayday5',icon:require('@/assets/images/2.jpg'),num:'70万'},
        ]
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }
    render(){
        return(
            <>
                <div className={style.header}>
                    <div className={style.headerLeft}>音乐馆</div>
                    <SearchBar placeholder="Search"  className={style.headerSearch} cancelText={<div className={style.searchClose}/>}/>
                    <img src={require('@/assets/images/header-music.png')} alt='' className={style.headerIcon}/>
                </div>
                <Carousel autoplay infinite className={style.carousel}>
                    {this.state.data.map(val => (
                        <img
                            key={val}
                            src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' ,borderRadius:'10px'}}
                            onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    ))}
                </Carousel>
                <ul className={style.categories}>
                    <li className={style.categoriesItem}>
                        <img className={style.icon} src={require('@/assets/images/icon-grid-singer.png')} alt='' />
                        <span className={style.itemName}>歌手</span>
                    </li>
                    <li className={style.categoriesItem}>
                        <img className={style.icon} src={require('@/assets/images/icon-grid-rank.png')} alt='' />
                        <span className={style.itemName}>排行</span>
                    </li>
                    <li className={style.categoriesItem}>
                        <img className={style.icon} src={require('@/assets/images/icon-grid-categories.png')} alt='' />
                        <span className={style.itemName}>分类歌单</span>
                    </li>
                    <li className={style.categoriesItem}>
                        <img className={style.icon} src={require('@/assets/images/icon-grid-radio.png')} alt='' />
                        <span className={style.itemName}>电台</span>
                    </li>
                    <li className={style.categoriesItem}>
                        <img className={style.icon} src={require('@/assets/images/icon-music-playing.png')} alt='' />
                        <span className={style.itemName}>一起听</span>
                    </li>
                </ul>
                <div className={style.songList}>
                    <div className={style.topBar}>
                        <div className={style.listTitle}>超热歌单</div>
                        <div className={style.viewMore}>更多<Icon type='right' style={{marginTop:'1px'}}/></div>
                    </div>
                    <Grid data={this.state.listContent}
                        isCarousel
                        hasLine={false}
                        dots={false}
                        columnNum={3}
                        onClick={_el => console.log(_el)}
                        itemStyle={{height:'125px'}}
                        renderItem={item => (
                            <div className={style.contentItem} >
                                <div className={style.item}>
                                    <img className={style.image} src={item.icon} alt='' />
                                    <div className={style.playIcon} />
                                </div>
                                <div className={style.title}>{item.text}</div>
                            </div>
                        )} 
                    />
                </div>
            </>
        )
    }
}