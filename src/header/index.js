/**
 * Created by pphetra on 11/10/2017 AD.
 */
import React, {Component} from "react";

class Header extends Component {
    render() {
        return (

            <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{'margin-bottom': 0}}>
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">Hệ thống giám sát dựa vào sự kiện</a>
                </div>

                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i class="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li><a href="#"><i className="fa fa-user fa-fw"></i> Thông tin cá nhân</a>
                            </li>
                            <li><a href="#"><i className="fa fa-gear fa-fw"></i> Cài đặt</a>
                            </li>
                            <li className="divider"></li>
                            <li><a href="login.html"><i class="fa fa-sign-out fa-fw"></i> Thoát</a>
                            </li>
                        </ul>

                    </li>
                </ul>


                <div class="navbar-default sidebar" role="navigation">
                    <div class="sidebar-nav navbar-collapse">
                        <ul class="nav" id="side-menu">
                            <li>
                                <a href="/"><i class="fa fa-dashboard fa-fw"></i> Tổng quan</a>
                            </li>
                            <li>
                                <a href="/report"><i class="fa fa-file fa-fw"></i> Báo cáo</a>
                            </li>
                            <li>
                                <a href="/sites"><i class="fa fa-table fa-fw"></i> Cài đặt web</a>
                            </li>
                            <li>
                                <a href="/keywords"><i class="fa fa-table fa-fw"></i> Từ khóa</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}

export default Header;