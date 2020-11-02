import React from 'react'
import {TabBar} from 'antd-mobile'
import style from  './index.module.scss'
import {Route,Switch,Redirect,withRouter} from 'react-router-dom'
import Music from '../../pages/Music'
import Recommend from '../../pages/Recommend'
import Trends from '../../pages/Trends'
import My from '../../pages/My'
class Main extends React.Component{
    render(){
        const pathname=this.props.location.pathname
        return(
            <>
                <div className={style.container}>
                    <Switch >
                        <Route path='/music' exact component={Music}/>
                        <Route path='/recommend' exact component={Recommend}/>
                        <Route path='/trends' exact component={Trends}/>
                        <Route path='/my' exact component={My}/>
                        <Redirect exact from={'/'} to={'/music'}/>
                    </Switch>
                </div>
                <div className={style.tabbar}>
                    <TabBar
                        unselectedTintColor="#b2b2b2"
                        tintColor="#2aaa6d"
                        barTintColor="#fff"
                        noRenderContent='true'
                    >
                        <TabBar.Item
                            title="音乐馆"
                            key="Life"
                            icon={<div className={style.music}/>}
                            selectedIcon={<div className={style.music_active}/>}
                            selected={pathname==='/music'}
                            onPress={() => {
                                this.props.history.push('/music')
                            }}
                        />
                        <TabBar.Item
                            icon={<div className={style.calendar}/>}
                            selectedIcon={<div className={style.calendar_active}/>}
                            title="推荐"
                            key="Koubei"
                            selected={pathname==='/recommend'}
                            onPress={() => {
                                this.props.history.push('/recommend')
                            }}
                        />
                        <TabBar.Item
                            icon={<div className={style.trends}/>}
                            selectedIcon={<div className={style.trends_active}/>}
                            title="动态"
                            key="Friend"
                            selected={pathname==='/trends'}
                            onPress={() => {
                                this.props.history.push('/trends')
                            }}
                        />
                        <TabBar.Item
                            icon={<div className={style.my}/>}
                            selectedIcon={<div className={style.my_active}/>}
                            title="我的"
                            key="my"
                            selected={pathname==='/my'}
                            onPress={() => {
                                this.props.history.push('/my')
                            }}
                        />
                    </TabBar>
                </div>

            </>
        )
    }
}
export default withRouter(Main) //使用withRouter之后Main组件可以通过props获得相关的路由信息