/**
 * title: 测试用户
 */
import React from 'react'
import Link from 'umi/link'
import { Button } from 'antd'
import styles from './style.less'

export default function() {
    const tss = () => {
        
    }
    return (
        <div className={styles.user}>
            <h1>user/test</h1>
            <Button type="primary">aa</Button>
            <ul>
                <li>
                    <Link to='/user/detail/12'>毛毛1</Link>
                </li>
            </ul>
        </div>
    )
}
