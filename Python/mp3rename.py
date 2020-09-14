import os
import win32com.client
#根据mp3音频文件的标题，对音频文件进行重命名
def getInfo(base_file):
    '''提取信息'''
    _shell = win32com.client.DispatchEx("shell.Application")
    _dir = _shell.NameSpace(os.path.dirname(base_file))
    item = _dir.ParseName(os.path.split(base_file)[1])
    title = _dir.GetDetailsOf(item, 21) # 标题
    artists = _dir.GetDetailsOf(item, 13) # 歌手
    album = _dir.GetDetailsOf(item, 14) # 专辑
    return title, artists, album

def rename(file_path, title):
    '''重命名'''
    new_filel_name = title + '.mp3'
    new_file_path = os.path.join(os.path.dirname(file_path), new_filel_name)
    if file_path != new_file_path:
        os.rename(file_path, new_file_path)
        print(file_path, '已更名为：', new_file_path)
    else:
        new_file_path = file_path
    return new_file_path

if __name__ == "__main__":
    directory_base = r"E:\mr"
    fileExtList = [".mp3"]
    for root, directory, file_list in os.walk(directory_base):
        for file_name in file_list:
            if os.path.splitext(file_name)[1] in fileExtList:
                file_path = os.path.join(root, file_name)
                title, artists, album = getInfo(file_path)
                # print(title, artists, album,sep=', ')
                title = title.strip().replace('?','').replace('|','')
                if title.strip():
                    # 取到title
                    file_path = rename(file_path, title) # 重命名