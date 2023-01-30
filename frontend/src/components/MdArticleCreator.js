import { useState } from 'react';
import { Button, Card, Input } from 'antd';
import { EditOutlined, EyeOutlined } from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';

const { TextArea } = Input;

export const MdArticleCreator = ({ mode = 'w', text = '', onCreate }) => {
    const [editorMode, setEditorMode] = useState(mode); // mode = { r, w }
    const [editorText, setEditorText] = useState(text);
    const [title, setTitle] = useState('');
    const changeMode = () => setEditorMode(editorMode === 'w' ? 'r' : 'w');
    const handleTextAreaChange = (e) => setEditorText(e.target.value);
    const handleInputChange = (e) => setTitle(e.target.value);
    const handleSubmit = () => {
        const content = editorText;
        const time = new Date().toISOString();
        onCreate({ title, content, time });
    };

    return (
        <Card
            title="建立文章"
            extra={
                <Button
                    onClick={changeMode}
                    icon={editorMode === 'w' ? <EyeOutlined /> : <EditOutlined />}
                />
            }
        >
            <div style={{ margin: '5px 0px' }}>
                <Input defaultValue={title} placeholder="標題" onChange={handleInputChange} />
            </div>

            {editorMode === 'w' ? (
                <TextArea
                    defaultValue={editorText}
                    style={{ resize: 'none', height: '450px' }}
                    onChange={handleTextAreaChange}
                    placeholder="內容(支援 markdown 語法)"
                />
            ) : (
                <div
                    style={{
                        height: '450px',
                        overflowY: 'scroll',
                        border: 'solid 1px #d9d9d9',
                        borderRadius: '6px',
                        padding: '4px 11px',
                    }}
                >
                    <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{editorText}</ReactMarkdown>
                </div>
            )}
            <div style={{ margin: '5px 0px' }}>
                <Button onClick={handleSubmit} type="primary">
                    建立
                </Button>
            </div>
        </Card>
    );
};
