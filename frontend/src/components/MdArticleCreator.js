import { useState } from 'react';
import { Button, Card, Input } from 'antd';
import { EditOutlined, EyeOutlined } from '@ant-design/icons';
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'


const { TextArea } = Input;

export const MdArticleCreator = ({mode='w', text='', onChange}) => {
    const [editorMode, setEditorMode] = useState(mode)  // mode = { r, w }
    const [editorText, setEditorText] = useState(text);
    const changeMode = () => setEditorMode((editorMode === 'w') ? 'r' : 'w');
    const handleTextAreaChange = (e) => {
        setEditorText(e.target.value);
        if (typeof onChange !== 'undefined') {
            onChange(editorText);
        }
    };

    return (
        <Card
            title='建立文章'
            extra={
                <Button 
                    onClick={ changeMode }
                    icon={ editorMode==='w' ? <EyeOutlined /> : <EditOutlined /> }
                />
            }
        >
            {
                editorMode === 'w' ?
                <TextArea
                    defaultValue={ editorText }
                    style={{ 'resize': 'none', height: '450px' }}
                    onChange={ handleTextAreaChange }
                /> :
                <div
                    style={{ 
                        height: '450px',
                        overflowY: 'scroll',
                        border: 'solid 1px #d9d9d9',
                        borderRadius: '6px',
                        padding: '4px 11px',
                    }}
                >
                    <ReactMarkdown 
                        rehypePlugins={[ rehypeHighlight ]}
                    >
                        { editorText }
                    </ReactMarkdown> 
                </div>
            }
        </Card>
    );
};
